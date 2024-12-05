import Link from "next/link";
export default function Footer() {
    return (
        <>
            <footer className='grid-container'>
                <div className='grid-item'>
                    <Link 
                        href='https://www.facebook.com/lukejacksonguitar'
                        target="_blank"
                    >
                        FACEBOOK
                    </Link>
                </div>
                <div className='grid-item'>
                    <Link 
                        href='https://www.instagram.com/lukejacksonguitar/'
                        target="_blank"
                    >
                        INSTAGRAM
                    </Link>
                </div>
                <div className='grid-item'>
                    <Link 
                        href='https://www.youtube.com/@lukejacksonguitar2642'
                        target="_blank"
                    >
                        YOUTUBE
                    </Link>
                </div>
                <div className='grid-item'>                    
                    <Link href='mailto:lukejacksonguitar@gmail.com'>
                        EMAIL
                    </Link>
                </div>
            </footer>
        </>
    );
}
