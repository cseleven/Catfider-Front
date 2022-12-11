export default function Loading() {
    return (
        <div class="grid h-screen place-items-center">
            <div>
                <svg class="animate-spin m-auto h-8 w-8 text-salmon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p class="text-center mt-1 font-extralight text-salmon">loading...</p>
            </div>
        </div>
    );
}