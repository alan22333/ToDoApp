
export default function Home() {
  return (
    <>
      <form className="flex item-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input type="text" name="title" placeholder="Enter title"
               className="px-3 py-2 border-2 w-full"/>
        <textarea name="description" placeholder="Enter description"
                  className="px-3 py-2 border-2 w-full h-[100px]"/>
        <button type="submit" className="bg-orange-600 px-3 py-2 w-full">Add Todo</button>
      </form>
      <div className="relative overflow-x-auto mt-4 w-[60%] mx-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Description
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">
                          Silver
                      </td>
                      <td className="px-6 py-4">
                          Laptop
                      </td>
                      <td className="px-6 py-4">
                          $2999
                      </td>
                      <td className="px-6 py-4">
                          NULL
                      </td>
                  </tr>

              </tbody>
          </table>
      </div>

    </>
  );
}
