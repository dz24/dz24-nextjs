import Link from 'next/link';
import { useTheme } from "next-themes";

const Button = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}>
	<svg height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><path fill="currentColor" d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z" transform="translate(-8 -8)"/></svg>
        </button>
    )
}

function HeaderComponent() {    
    return (        
	<>
	<div id="header" className="content-center mx-0 2xl:my-20 md:my-16 my-8">
	    <div id="l_container" className="mx-auto 2xl:w-[1140px] lg:w-[940px] md:w-[720px]">
	        <div id="h_wrapper" className="flex md:flex-row items-center flex-col">
	            <div id="h_box_title" className="md:w-2/4">
	                <header id="header-title">
	                    <h1>
	                        <Link href="/"><h1>dz24</h1></Link>
	                    </h1>
	                </header>
	            </div>
	            <div id="h_box_nav" className="md:w-2/4">
	                <div id="h_box_nav">
	                    <ul className="md:text-right">
	                        <li className="inline-block mx-3"><Link href="/blog">Blog</Link></li>
	                        <li className="inline-block mx-3"><Link href="/projects">Projects</Link></li>
	                        <li className="inline-block mx-3"><Link href="/about">About</Link></li>
	                        <li className="inline-block mx-3"><Link href="/about">EN</Link></li>
	                        <li className="inline-block mx-3"> <div ><Button/></div> </li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
	</>
    )
}

export default HeaderComponent
