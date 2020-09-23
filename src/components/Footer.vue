<template>
    <footer class="bg-stone-blue w-full h-full text-white font-opens-sans">
        <div class="container mx-auto flex flex-col justify-between px-8">
            <div class="w-full border-b border-white py-4 flex justify-between">
                <img src="../assets/images/rotate-globe.gif" alt="rotating earth" class="w-10 h-10">
                <ul class="list-disc flex flex-col">
                    <li>
                        <a href="http://localhost:8080/" class="font-bold text-md hover:underline">Homepage</a>
                    </li>
                    <li>
                        <a href="http://localhost:8080/random-country" class="font-bold text-md hover:underline">Random Country</a>
                    </li>
                </ul>
            </div>
            <div class="w-full flex flex-col md:flex-row justify-between items-center py-4">
                <p>Copyright: <span class="font-bold">Countrypedia</span></p>
                <p>Realised by <span class="font-bold">Jairo</span></p>
            </div>
        </div>
    </footer>
</template>