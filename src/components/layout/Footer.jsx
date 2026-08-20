function Footer() {
  return (
    <footer className="border-t w-full">
      {/* <div className="mx-auto px-4 py-8 text-center"> */}
      {/* <div>
          <h2 className="text-lg font-bold">JSNotes</h2>

          <p className="mt-2 text-sm text-gray-500">
            Interactive JavaScript notes for learning by understanding.
          </p>
        </div> */}

      <div className=" p-5 flex items-center justify-between">
        <p className="text-sm text-gray-500 flex-1 text-center">
          © {new Date().getFullYear()} JSNotes. All rights reserved.
        </p>

        <div className="h-8 w-8"></div>
      </div>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
