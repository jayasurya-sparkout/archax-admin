
export const NavBar = () => {
    return (
        <div className="max-w-screen-xl flex flex-wrap items-center sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow justify-end px-4">
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Connect Wallet
              </button>
            </div>
        </div>
    )
}