export default function Home() {
  return (
    <div>
      <h1 className="text-lg h-auto w-auto first-letter:text-red-500 items-center flex before:bg-violet-500 before:w-2 before:h-2 ">
        Hello Tailwind
      </h1>
      <h1 className="after:bg-red-500 items-center after:h-2 after:w-2  flex">
        After Teste
      </h1>
      <label htmlFor="email">
        Email
      </label>
      <input type="email" placeholder="email" className="required border-2 mt-10 border-black "/> <br />
      <button type="submit" className="bg-primary mt-10 text-white">Submit</button>
    </div>
  );
}
