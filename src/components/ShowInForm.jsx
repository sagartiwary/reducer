import React from 'react'

export const ShowInForm = ({data}) => {
    
  return (
    <>
      <div class="relative overflow-x-auto max-w-full mx-auto mt-[4rem]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                S.No
              </th>
              <th scope="col" class="px-6 py-3">
                User
              </th>
              <th scope="col" class="px-6 py-3">
                Gender
              </th>
              <th scope="col" class="px-6 py-3">
                Role
              </th>
              <th scope="col" class="px-6 py-3">
                Marital Status
              </th>
            </tr>
          </thead>
          <tbody>

            {data.map((ele,index)=>{
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index+1}
                    </th>
                    <td class="px-6 py-4">{ele.name}</td>
                    <td class="px-6 py-4">{ele.gender}</td>
                    <td class="px-6 py-4">{ele.role}</td>
                    <td class="px-6 py-4">{ele.marital?"Married":"Unmarried"}</td>
                  </tr>
                );
            })}
          
            
            
          </tbody>
        </table>
      </div>
    </>
  );
}
