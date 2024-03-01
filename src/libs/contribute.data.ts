import image from '@/public/images/enbraining.png'
import kyutorials from '@/public/images/kyutorials.png'
import imnyang from '@/public/images/imnyang.webp'


interface Profile {
    name: string;
    image: string;
    github: string;
}

export const contributes: Profile[] = [
    {
        "name": "enbraining",
        "image": image.src,
        "github": "https://github.com/enbraining"
    },
    {
        "name": "imnyang",
        "image": imnyang.src,
        "github": "https://github.com/imnyang"
    },
    {
        "name": "supernova",
        "image": image.src,
        "github": "https://github.com/524bit"
    },
    {
        "name": "kyutorials",
        "image": kyutorials.src,
        "github": "https://github.com/kyutorials"
    }
]