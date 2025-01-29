<script lang="ts">
    import { guilds } from "$lib";
</script>

<div class="my-20 space-y-5">
    <div class="flex overflow-hidden whitespace-nowrap">

        <div class="inline-block animate-slide-left">
            {#each guilds.row1 as item}
                <div class="inline-block mx-2.5">
                    <a href="{item.description}">
                        <div class="bg-white p-2.5 rounded-2xl gap-3 w-80 md:w-[23rem] items-center flex rounded-br-4xl">
                            <img class="w-24 h-24 rounded-lg md:w-26 md:h-26 rounded-br-4xl" src="{item.image}" alt="">
                            <div class="flex flex-col gap-0.5 md:gap-1">
                                <h1 class="text-2xl font-semibold md:text-3xl font-bricolage-condensed">{item.title}</h1>
                                <span class="text-lg md:text-xl">{item.subject}</span>
                            </div>
                        </div>
                    </a>
                </div>
            {/each}
        </div>

        <div class="inline-block animate-slide-left">
            {#each guilds.row1 as item}
                <div class="inline-block mx-2.5">
                    <a href="{item.description}">
                        <div class="bg-white p-2.5 rounded-2xl gap-3 w-80 md:w-[23rem] items-center flex rounded-br-4xl">
                            <img class="w-24 h-24 rounded-lg md:w-26 md:h-26 rounded-br-4xl" src="{item.image}" alt="">
                            <div class="flex flex-col gap-0.5 md:gap-1">
                                <h1 class="text-2xl font-semibold md:text-3xl font-bricolage-condensed">{item.title}</h1>
                                <span class="text-lg md:text-xl">{item.subject}</span>
                            </div>
                        </div>
                    </a>
                </div>
            {/each}
        </div>

        <div class="inline-block animate-slide-left">
            {#each guilds.row1 as item}
                <div class="inline-block mx-2.5">
                    <a href="{item.description}">
                        <div class="bg-white p-2.5 rounded-2xl gap-3 w-80 md:w-[23rem] items-center flex rounded-br-4xl">
                            <img class="w-24 h-24 rounded-lg md:w-26 md:h-26 rounded-br-4xl" src="{item.image}" alt="">
                            <div class="flex flex-col gap-0.5 md:gap-1">
                                <h1 class="text-2xl font-semibold md:text-3xl font-bricolage-condensed">{item.title}</h1>
                                <span class="text-lg md:text-xl">{item.subject}</span>
                            </div>
                        </div>
                    </a>
                </div>
            {/each}
        </div>
        
    </div>

</div>