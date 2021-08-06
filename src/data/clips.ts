export interface Clip {
    name: string;
    slug: string;
    clipId: string;
    quote?: {
        name: string;
        profileImage: string;
        color: string;
        twitchUrl: string;
        comment: string;
    }
}

export const clips: Clip[] = [
    {
        name: 'WOHOO',
        slug: 'wohoo',
        clipId: 'ExuberantHealthyWolfPeoplesChamp-Z6ZpS0h1ARBwIhX1',
        quote: {
            name: 'Jon Sugar',
            profileImage: 'data:image/png;base64,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',
            color: 'rgb(95, 158, 160)',
            twitchUrl: 'https://www.twitch.tv/jonsugar',
            comment: 'According to a World Health Organization study, 90% of all Rubyists say Woo Hoo when excited.'
        }
    },
    {
        name: 'DELETE KEY',
        slug: 'delete-key',
        clipId: 'SpeedyEasyPuddingOSkomodo-_0ngJ1kA1SbxcV5L',
    },
    {
        name: 'REDEEM CAT',
        slug: 'redeem-cat',
        clipId: 'ClearGeniusTrollPanicBasket-2MEDoTnDFKp2G6vY',
    },
    {
        name: 'CELEBRATE ME',
        slug: 'celebrate-me',
        clipId: 'PolishedPluckyTubersKappa-2-5QayTxoAfFFCOM',
    },
    {
        name: 'SO NERDY, NOT COOL AT ALL',
        slug: 'so-nerdy',
        clipId: 'DistinctFuriousPeafowlImGlitch-juqCW6O4Gwk_6HiC',
    },
    {
        name: 'ABSOLUTELYYY',
        slug: 'absolutelyyy',
        clipId: 'SeductiveWildDogTBCheesePull-PN8HyeVgcW1WgceH',
    },
    {
        name: 'DAB FOR RUST',
        slug: 'dab-for-rust',
        clipId: 'SavoryDeterminedKittenBloodTrail-6bzyvQVxbm5IXAuL',
    },
    {
        name: 'DAB FOR RUST',
        slug: 'dab-for-rust',
        clipId: 'SavoryDeterminedKittenBloodTrail-6bzyvQVxbm5IXAuL',
    },
];

export function generateClipUrl(clip: Clip) {
    return `https://clips.twitch.tv/embed?clip=${clip.clipId}&autoplay=true&parent=localhost&parent=chael.cool`
}
