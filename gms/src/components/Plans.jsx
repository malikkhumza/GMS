import React from 'react'

function Plans() {
  return (
    <div className='w-screen '>
        <section class="bg-white dark:bg-gray-900 pt-6">
  <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-24">
    <div class="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
      <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 font-KeplerStd  dark:text-white">Subscription Plans</h2>
      <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here you can choose plan according to your needs.</p>
    </div>
    <div class="space-y-8 sm:gap-6 lg:grid lg:grid-cols-2 lg:space-y-0 xl:gap-10">
      <div class="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow xl:p-8 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
        <h3 class="mb-4 text-2xl font-semibold">Basic</h3>
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option if you live near &amp; can visit ocassionally. Lorem ipsum dolor sit.</p>
        <div class="my-8 flex items-baseline justify-center">
          <span class="mr-2 text-5xl font-extrabold">$0</span>
          <span class="text-gray-500 dark:text-gray-400">/month</span>
        </div>

        <ul role="list" class="mb-8 space-y-4 text-left">
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Grave Maintainance</span>
          </li>
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>No setup, or hidden fees</span>
          </li>
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Cleaning once a month </span>
          </li>
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Disaster Management </span>
          </li>
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Free updates </span>
          </li>
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Free updates </span>
          </li>
        </ul>
        
        <a href="#" class="rounded-lg bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 dark:text-white dark:focus:ring-purple-900">Get started</a>
        
      </div>

      <div class="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow xl:p-8 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
        <h3 class="mb-4 text-2xl font-semibold">Premium</h3>
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for people who live abroad and for those who can't visit.</p>
        <div class="my-8 flex items-baseline justify-center">
          <span class="mr-2 text-5xl font-extrabold">$0</span>
          <span class="text-gray-500 dark:text-gray-400" dark:text-gray-400="">/month</span>
        </div>

        <ul role="list" class="mb-8 space-y-4 text-left">
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Grave Maintainance</span>
          </li>
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>No setup, or hidden fees</span>
          </li>
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Cleaning twice a months </span>
          </li>
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Flowering and Scenting </span>
          </li>
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Disaster Management</span>
          </li>
          <li class="flex items-center space-x-3">
            <svg class="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Free updates</span>
          </li>
        </ul>
        <a href="#" class="rounded-lg bg-purple-600 px-5 py-2.5  text-center text-sm font-medium text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 dark:text-white dark:focus:ring-purple-900">Get started</a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Plans