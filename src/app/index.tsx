function App() {
  return (
    <>
      <main>
        <div className="mx-auto mt-20 flex max-w-md flex-col items-center">
          <img
            width={100}
            height={100}
            src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
            alt="Package logo"
          />
          <h1 className="text-5xl font-bold">Vite Template</h1>
          <p className="mt-2">Starter template for Vite and React</p>
        </div>
      </main>
    </>
  );
}

export default App;
