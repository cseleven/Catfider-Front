import { useRouter } from "next/router";
import Image from 'next/image'
import catProfile1 from '../../../public/index/cat-profile1.png'

const urlpic = "https://images.unsplash.com/photo-1615789591457-74a63395c990"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CatProfile() {
  const router = useRouter();
  return (
    <div class="container h-[87vh] mx-auto">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              หน้าแรก
            </a>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">ค้นหาแมว</span>
            </div>
          </li>
        </ol>
      </nav>
      <div class="flex h-[390px]">
        <div class="w-1/3">
          <Image
      src={catProfile1}
      alt="Picture of rose"
      width="100%"
      height="300px"
  />
          
         <div class="w-1/3">

        </div>
      </div>
    </div>
    </div>
  );
}