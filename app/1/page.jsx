export default function Home() {
  return (
    <>
      <div className="flex flex-row w-1/2 mx-auto">
        <div className="border-2 w-1/2">
          <h1>Choose amount thats right for you</h1>
          <input type="text" name="firstName" id="firstName" />

          <input type="email" name="email" id="email" />
          <input type="password" name="password" id="password" />
          <input type="text" name="cardNumber" id="" />
          <input type="text" name="cardNumber" id="" />
          <button className="w-full bg-gray-500" type="submit">
            Create Account
          </button>
        </div>
        <div className="border-2 w-1/2">
          <h1>hiya</h1>
        </div>
      </div>
    </>
  );
}
