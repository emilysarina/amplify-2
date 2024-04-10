// import React from 'react'
// import { revalidatePath } from 'next/cache';
// import * as mutations from '@/graphql/mutations';
// import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
// import { cookies } from 'next/headers';
// import config from '@/amplifyconfiguration.json';
// const cookiesClient = generateServerClientUsingCookies({
//   config,
//   cookies
// });

// function createTodo(formData: FormData) {
//   'use server';
//   const { data } = cookiesClient.graphql({
//     query: mutations.createTodo,
//     variables: {
//       input: {
//         name: formData.get('name')?.toString() ?? ''
//       }
//     }
//   });

//   console.log('Created Todo: ', data?.createTodo);

//   revalidatePath('/');
// }

// export default function todoSearch() {
//   return (
//     <div>todo</div>
//   )
// }
