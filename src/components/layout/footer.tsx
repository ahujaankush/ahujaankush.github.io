import { Github, Linkedin, Mail } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import Link from 'next/link';
import { LinkHoverAnim } from './header';
import { Large } from '../ui/typography';

const socials = [
  {
    name: "E-Mail",
    link: "mailto:aahuja06@proton.me",
    icon: <Mail color='white' />
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ahujaankush/",
    icon: <Linkedin color='white' />
  },
  {
    name: "GitHub",
    link: "https://github.com/ahujaankush",
    icon: <Github color='white' />
  }
]

export default function Footer() {
  return (
    <div className="flex flex-col grow p-8 space-y-4 justify-center align-center bg-secondary">
      <div className='flex flex-row space-x-5 self-center'>
        {
          socials.map((e, i) => {
            return (
              <Tooltip key={`tooltip-footer-icons-${i}`}>
                <TooltipTrigger>
                  <Link className='flex grow rounded-full items-center justify-center w-10 h-10 bg-foreground' href={e.link}>
                    {e.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  {e.name}
                </TooltipContent>
              </Tooltip>
            )
          })
        }
      </div>
      <div className='flex flex-row space-x-5 self-center'>
        <LinkHoverAnim href="/edu">EDUCATION</LinkHoverAnim>
        <LinkHoverAnim href="/res">RESEARCH</LinkHoverAnim>
        <LinkHoverAnim href="/prof">PROFESSIONAL</LinkHoverAnim>
        <LinkHoverAnim href="/Resume.pdf" locale={false}>RESUME</LinkHoverAnim>
      </div>
      <Large className='flex self-center'>
        Ankush Ahuja, 2024
      </Large>
    </div>
  )
}
