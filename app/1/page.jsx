export default function Home() {
  return (
    <>
      <div className="flex gap-4  bg-gray-200 flex-row w-[750px] mx-auto rounded-lg border border-gray-200  text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
        <div className="border-2 w-1/2">
          <h1 className="text-xl font-semibold leading-none tracking-tight">
            Choose amount thats right for you
          </h1>
          <input
            placeholder="First Name"
            className="flex h-10 w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500  disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
            type="text"
            name="firstName"
            id="firstName"
          />

          <input
            placeholder="Email"
            className="flex h-10 w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500  disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
            type="email"
            name="email"
            id="email"
          />
          <input
            placeholder="Password"
            className="flex h-10 w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500  disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
            type="password"
            name="password"
            id="password"
          />
          <input
            placeholder="Card Number"
            className="flex h-10 w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500  disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
            type="text"
            name="cardNumber"
            id=""
          />
          <input
            placeholder="First Name"
            className="flex h-10 w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500  disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
            type="text"
            name="cardNumber"
            id=""
          />
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-white transition-colors  disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 h-10 px-4 py-2 w-full"
            type="submit"
          >
            Create Account
          </button>
        </div>
        <div className="border-2 w-1/2">
          <input className="hidden" type="checkbox" name="200gb" id="200gb" />
          <label htmlFor="200gb">
            <div className="bg-white border-2 w-full h-fit rounded-sm ">
              <h1 className="">Essential</h1>
              <p>
                <span>200 GB</span> of storage
              </p>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
