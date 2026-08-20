export function executeCode(code, onLog) {
  const formatValue = (value) => {
    if (typeof value === "string") {
      return value;
    }

    if (value === undefined) {
      return "undefined";
    }

    if (value === null) {
      return "null";
    }

    if (typeof value === "object") {
      try {
        return JSON.stringify(value, null, 2);
      } catch {
        return String(value);
      }
    }

    return String(value);
  };

  const reportError = (error) => {
    const name = error?.name || "Error";
    const message = error?.message || String(error);

    onLog({
      type: "error",
      message: `${name}: ${message}`,
    });
  };

  const createLogger = (type) => {
    return (...args) => {
      const message = args.map(formatValue).join(" ");

      onLog({
        type,
        message,
      });
    };
  };

  const customConsole = {
    log: createLogger("log"),
    error: createLogger("error"),
    warn: createLogger("warn"),
    info: createLogger("info"),
  };

  /*

   */
  const safeSetTimeout = (callback, delay, ...args) => {
    return setTimeout(() => {
      try {
        callback(...args);
      } catch (error) {
        reportError(error);
      }
    }, delay);
  };

  /*

   */
  const safeSetInterval = (callback, delay, ...args) => {
    return setInterval(() => {
      try {
        callback(...args);
      } catch (error) {
        reportError(error);
      }
    }, delay);
  };

  try {
    const runCode = new Function(
      "console",
      "setTimeout",
      "clearTimeout",
      "setInterval",
      "clearInterval",
      "Promise",
      `
        return (async () => {
          ${code}
        })();
      `,
    );

    const result = runCode(
      customConsole,
      safeSetTimeout,
      clearTimeout,
      safeSetInterval,
      clearInterval,
      Promise,
    );

    /*
     * Only catch errors from the main async execution.
     */
    if (result && typeof result.catch === "function") {
      result.catch((error) => {
        reportError(error);
      });
    }

    return {
      success: true,
      result,
    };
  } catch (error) {
    reportError(error);

    return {
      success: false,
      error: error.message,
    };
  }
}
