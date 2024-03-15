export default function Loader() {
    return (
        <div class="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center h-screen">
            <div class="relative inline-flex">
                <div class="w-8 h-8 bg-orange-500 rounded-full"></div>
                <div class="w-8 h-8 bg-orange-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                <div class="w-8 h-8 bg-orange-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
        </div>
    )
}