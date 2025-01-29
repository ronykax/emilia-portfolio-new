<script lang="ts">
    import Linked from "$lib/icons/white/Linked.svelte";
    import Hamburger from "$lib/icons/black/Hamburger.svelte";
    import Scroller from "$lib/Scroller.svelte";
    import FolderBlack from "$lib/icons/menu/Folder.svelte";
    import BrushBlack from "$lib/icons/menu/Brush.svelte";
    import ChatBlack from "$lib/icons/menu/Chat.svelte";
    import Close from "$lib/icons/black/Close.svelte";

    import { blur } from "svelte/transition";
    import { choices, options, reviews, services, socials} from "$lib";

    let opened = false;
</script>

{#if opened}
    <div class="fixed z-10 flex items-center justify-center w-screen h-screen bg-white" transition:blur>
        <div>
            <ul class="flex flex-col gap-4">
                {#each options as item}                    
                    <li>
                        <div class="flex items-center gap-4 hover:opacity-60">
                            <svelte:component this={item.icon} />
                            <a href="{item.subject}" on:click={() => opened = !opened}>
                                <h1 class="text-xl font-semibold text-black font-bricolage">{item.title}</h1>
                            </a>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>
        <button class="fixed top-0 right-0 h-20 px-6" on:click={() => opened = false}>
            <Close />
        </button>
    </div>
{/if}

<div>
    <div class="h-screen">
        <div class="bg-blue">
            <div class="flex items-center justify-between h-20 px-6 bg-white rounded-bl-3xl md:px-32">
                <div class="flex items-center gap-3">
                    <img class="w-10 rounded-full" src="favicon.png" alt="">
                    <h1 class="text-2xl font-semibold font-bricolage">Emilia Petersen</h1>
                </div>

                <div class="lg:hidden">
                    <button on:click={() => opened = !opened}>
                        <Hamburger />
                    </button>
                </div>

                <div class="hidden lg:block">
                    <ul class="flex gap-8">
                        <li>
                            <div class="flex items-center gap-2 hover:opacity-60">
                                <FolderBlack />
                                <a href="#portfolio">
                                    <h1 class="text-xl font-semibold">Portfolio</h1>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center gap-2 hover:opacity-60">
                                <BrushBlack />
                                <a href="#services">
                                    <h1 class="text-xl font-semibold">Services</h1>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center gap-2 hover:opacity-60">
                                <ChatBlack />
                                <a href="#reviews">
                                    <h1 class="text-xl font-semibold">Testimonials</h1>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex items-end pb-20 h-5/6 bg-blue rounded-br-8xl">
            <div class="flex flex-col gap-5 px-6 pt-64 md:px-32">
                <h1 class="text-5xl font-light text-white font-bricolage">
                    Hi! I’m
                    <span class="font-semibold font-bricolage">Emilia Petersen</span>, a <span class="font-semibold font-bricolage">Community Manager</span>
                </h1>
                <span class="text-2xl font-medium text-white">I help foster communities.</span>
            </div>
        </div>
    </div>

    <div class="mb-24">
        <div class="flex flex-col items-center gap-9">
            <h1 class="text-3xl text-center font-bricolage">
                What are you<br><span class="font-semibold font-bricolage">looking for</span> today?
            </h1>
            <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
                {#each choices as item, index}
                    <a href="{item.subject}">
                        <div class="w-40 p-2.5 bg-blue rounded-2xl hover:shadow-2xl">
                            <div class="flex flex-col items-center justify-center gap-2 bg-white rounded-lg h-44 {index % 2 === 0 ? "rounded-tl-6xl" : "rounded-br-6xl"}">
                                <svelte:component this={item.icon} />
                                <h1 class="font-medium text-center">{item.title}</h1>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </div>

    <div class="py-32 my-24 bg-blue rounded-tl-8xl rounded-br-8xl" id="portfolio">
        <h1 class="text-3xl text-center text-white font-bricolage">
            I've <span class="font-semibold font-bricolage">worked with</span><br>hundreds of clients
        </h1>

        <Scroller />
        
        <h1 class="text-3xl text-center text-white font-bricolage">
            With moderation and<br><span class="font-semibold font-bricolage">management</span>
        </h1>
    </div>

    <div class="flex flex-col px-6 my-24 gap-9" id="services">
        <h1 class="text-3xl text-center font-bricolage">
            Explore what I <span class="font-semibold font-bricolage">offer</span>
        </h1>

        <div class="flex justify-center">
            <div class="flex flex-col w-full gap-4 md:w-1/2">

                {#each services as item, index}
                    <!-- <a href="{item.subject}">
                        <div class="bg-blue flex gap-3 p-2.5 rounded-2xl hover:shadow-2xl {index === 0 ? "rounded-tr-6xl" : index === services.length - 1 && "rounded-br-6xl"}">
                            <div class="p-10 bg-white rounded-lg h-fit w-fit {index === 0 ? "rounded-tr-6xl" : index === services.length - 1 && "rounded-br-6xl"}">
                                <svelte:component this={item.icon} />
                            </div>
                            <div class="flex flex-col gap-1.5 py-2 w-full">
                                <div class="flex items-center justify-between">
                                    <h1 class="text-2xl font-semibold text-white underline font-bricolage-condensed underline-offset-4">{item.title}</h1>
                                    <Linked />
                                </div>
                                <span class="font-medium text-white">{item.description}</span>
                            </div>
                        </div>
                    </a> -->
                    <a href="{item.subject}">
                        <div class="bg-blue flex gap-3 p-2.5 rounded-2xl hover:shadow-2xl">
                            <div class="p-10 bg-white rounded-lg h-fit w-fit">
                                <svelte:component this={item.icon} />
                            </div>
                            <div class="flex flex-col gap-1.5 py-2 w-full">
                                <div class="flex items-center justify-between">
                                    <h1 class="text-2xl font-semibold text-white underline font-bricolage-condensed underline-offset-4">{item.title}</h1>
                                    <Linked />
                                </div>
                                <span class="font-medium text-white">{item.description}</span>
                            </div>
                        </div>
                    </a>
                {/each}
                
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center py-32 my-24 bg-blue rounded-tl-8xl rounded-br-8xl" id="reviews">
        <h1 class="text-3xl text-center text-white font-bricolage">
            What people<br><span class="font-semibold font-bricolage">are saying</span>
        </h1>

        <div class="flex flex-col w-full gap-4 px-6 my-20 md:flex-row md:w-3/4">
            {#each reviews as item}            
                <div class="flex flex-col gap-2 p-2.5 bg-white rounded-2xl h-[26rem] custom-scrollbar rounded-br-6xl">
                    <div class="flex items-center gap-3">
                        <img class="w-20 rounded-lg rounded-br-4xl" src="{item.image}" alt="">
                        <div class="flex flex-col">
                            <h1 class="text-2xl font-semibold font-bricolage-condensed">{item.title}</h1>
                            <span class="">{item.subject}</span>
                        </div>
                    </div>
                    <span class="overflow-auto font-medium">{item.description}</span>
                </div>
            {/each}
        </div>
    </div>

    <div class="flex flex-col px-6 my-24 gap-9" id="contact">
        <h1 class="text-3xl text-center font-bricolage">
            Let’s get <span class="font-semibold font-bricolage">in touch</span>
        </h1>

        <div class="flex justify-center">
            <div class="flex flex-col items-center w-full gap-4 lg:flex-row lg:justify-center">

                {#each socials as item, index}
                    <a href="{item.subject}">
                        <div class="w-72 bg-blue p-2.5 hover:shadow-2xl rounded-2xl flex gap-3 items-center {index === 0 ? "rounded-tl-6xl" : index === socials.length - 1 && "rounded-bl-6xl lg:rounded-bl-2xl lg:rounded-br-6xl"}">
                            <div class="p-6 bg-white rounded-lg {index === 0 ? "rounded-tl-5xl" : index === socials.length - 1 && "rounded-bl-5xl lg:rounded-bl-lg lg:rounded-br-5xl"}">
                                <svelte:component this={item.icon} />
                            </div>
                            <div class="flex items-center justify-between w-full">
                                <h1 class="text-2xl font-semibold text-white underline font-bricolage-condensed underline-offset-4">{item.title}</h1>
                                <Linked />
                            </div>
                        </div>
                    </a>
                {/each}

            </div>
        </div>
    </div>

    <div class="flex items-end pt-24 pb-20 bg-blue rounded-tl-8xl">
        <div class="flex flex-col gap-4 px-6 md:px-32">
            <h1 class="text-5xl font-light text-white font-bricolage-condensed">
                Emilia Petersen
            </h1>
            <span class="text-2xl font-medium text-white">© {new Date().getFullYear()}</span>
        </div>
    </div>
</div>