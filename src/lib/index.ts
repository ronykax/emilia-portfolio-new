import Bag from "$lib/icons/blue/Bag.svelte";
import Shield from "$lib/icons/blue/Shield.svelte";
import Paint from "$lib/icons/blue/Paint.svelte";
import Folder from "$lib/icons/black/Folder.svelte";
import Brush from "$lib/icons/black/Brush.svelte";
import Chat from "$lib/icons/black/Chat.svelte";
import Mail from "$lib/icons/black/Mail.svelte";
import Fiverr from "$lib/icons/blue/Fiverr.svelte";
import Discord from "$lib/icons/blue/Discord.svelte";
import Twitter from "$lib/icons/blue/Twitter.svelte";
import Bluesky from "$lib/icons/blue/Bluesky.svelte";
import FolderBlack from "$lib/icons/menu/Folder.svelte";
import BrushBlack from "$lib/icons/menu/Brush.svelte";
import ChatBlack from "$lib/icons/menu/Chat.svelte";
import FiverrBlack from "$lib/icons/menu/Fiverr.svelte";
import DiscordBlack from "$lib/icons/menu/Discord.svelte";
import TwitterBlack from "$lib/icons/menu/Twitter.svelte";
import BlueskyBlack from "$lib/icons/menu/Bluesky.svelte";

import Email from "./icons/blue/Email.svelte";
import EmailBlack from "./icons/menu/Email.svelte";

interface Item {
    title?: string;
    subject?: string;
    description?: string;
    icon?: ConstructorOfATypedSvelteComponent;
    image?: string;
}

const choices: Item[] = [
    {
        title: "Viewing my resume",
        icon: Folder,
        subject: "#portfolio"
    },
    {
        title: "Seeing what I offer",
        icon: Brush,
        subject: "#services"
    },
    {
        title: "Viewing user reviews",
        icon: Chat,
        subject: "#reviews"
    },
    {
        title: "Getting in touch with me",
        icon: Mail,
        subject: "#contact"
    }
];

const services: Item[] = [
    // {
    //     title: "Management",
    //     description: "I will do Discord community management for you!",
    //     icon: Bag,
    //     subject: "https://www.fiverr.com/emmy1231/do-discord-community-management"
    // },
    // {
    //     title: "Moderation",
    //     description: "I will do Discord community moderation for you!",
    //     icon: Shield,
    //     subject: "https://www.fiverr.com/emmy1231/do-discord-server-moderation"
    // },
    {
        title: "Server Setup",
        description: "I will setup a professional Discord server for you!",
        icon: Paint,
        subject: "https://www.fiverr.com/emmy1231/setup-a-professional-discord-server"
    }
];

const reviews: Item[] = [
    {
        title: "Indigo",
        subject: "Fiverr Expert",
        description: "I've had the privilege of collaborating with Emilia for over two years on our Fiverr gig, \"Discord Doctor,\" crafting professional Discord communities across various fields. Emilia's perfectionism in both aesthetics and functionality has been instrumental in our success, always going the extra mile to ensure every detail is just right. Her willingness to step in and cover for me during personal challenges showcases her loyalty and dedication. Her expertise in Discord server setup, tech support, security, and moderation, coupled with her fun and caring personality, makes her an invaluable asset. I wholeheartedly endorse Emilia for any endeavor, confident that her character and hard work will shine through in everything she does.",
        image: "user_indigo.png"
    },
    {
        title: "Pockets",
        subject: "Blight: Survival Moderator",
        description: "I've been fortunate enough to work with Emilia for the past year in administrating and developing the official Discord server for the highly anticipated Blight: Survival video game. She works hard to iterate on each component of our server every chance she gets, improving it with her extensive knowledgebase of Discord's systems; bots; popular trends; security concerns; moderation and more. She takes constructive feedback happily, always looking to perfect her workflows and refine her craft. On top of her expertise, Emilia has a radiant personality that is both supportive and loyal, and I would gladly recommend working with her for any project.",
        image: "user_pockets.webp"
    }
];

const socials: Item[] = [
    {
        title: "Fiverr",
        icon: Fiverr,
        subject: "https://www.fiverr.com/emmy1231"
    },
    {
        title: "Discord",
        icon: Discord,
        subject: "https://discord.com/users/412058573372260353"
    },
    {
        title: "Bluesky",
        icon: Bluesky,
        subject: "https://bsky.app/profile/emiliathefallen.bsky.social"
    },
    {
        title: "Email",
        icon: Email,
        subject: "mailto:contact@emiliapetersen.com"
    }
];

const guilds: {
    row1: Item[],
    // row2: Item[]
} = {
    row1: [
        {
            title: "Dragontwin",
            subject: "30,000+ Members",
            description: "https://discord.gg/dragontwin",
            image: "servers/DRAGONTWIN.webp"
        },
        {
            title: "Unrecord",
            subject: "30,000+ Members",
            description: "https://discord.gg/unrecord",
            image: "servers/UNRECORD.webp"
        },
        {
            title: "Fiefdom",
            subject: "1,000+ Members",
            description: "https://discord.gg/nufpxHrjrS",
            image: "servers/FIEFDOM.webp"
        },
        {
            title: "modMAIL",
            subject: "1,000,000+ Members",
            description: "https://discord.gg/tpv3PwvhvB",
            image: "servers/modMAIL.png"
        }
    ],
    // row2: [
    //     {
    //         title: "Organise & Optimise",
    //         subject: "100+ Members",
    //         description: "https://discord.gg/CZXmatPxQ5",
    //         image: "https://cdn.discordapp.com/icons/1121502048517632122/dbf8ff464aca5973a6d155509150483f.webp?size=1024&format=webp&width=0&height=256"
    //     },
    //     {
    //         title: "Rise & Reign",
    //         subject: "400+ Members",
    //         description: "https://discord.gg/42dnzBwkXd",
    //         image: "https://cdn.discordapp.com/icons/869610180009156659/599d08bdc2cf8dceee4cebb0414f4e13.webp?size=1024&format=webp&width=0&height=256"
    //     }
    // ]
}

const options: Item[] = [
    {
        title: "Portfolio",
        icon: FolderBlack,
        subject: "#portfolio"
    },
    {
        title: "Services",
        icon: BrushBlack,
        subject: "#services"
    },
    {
        title: "Testimonials",
        icon: ChatBlack,
        subject: "#reviews"
    },
    {
        title: "Fiverr",
        icon: FiverrBlack,
        subject: "https://www.fiverr.com/emmy1231"
    },
    {
        title: "Discord",
        icon: DiscordBlack,
        subject: "https://discord.com/users/412058573372260353"
    },
    {
        title: "Twitter",
        icon: TwitterBlack,
        subject: "https://twitter.com/EmiliaPetersen0"
    },
    {
        title: "Bluesky",
        icon: BlueskyBlack,
        subject: "https://bsky.app/profile/emiliapetersen.bsky.social"
    },
    {
        title: "Email",
        icon: EmailBlack,
        subject: "mailto:contact@emiliapetersen.com"
    }
];

export { choices, services, reviews, socials, guilds, options }