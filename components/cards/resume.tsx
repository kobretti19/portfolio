import { FaDownload } from 'react-icons/fa';
import Card from '../ui/card';
import Image from 'next/image';
import Button from '../ui/button';
import Socials from '../ui/social';
import { signatureImg } from '@/data/index';

export default function ResumeCard() {
  return (
    <Card className='md:h-full'>
      <p className='text-lg xl:text-2xl font-medium text-primary-foreground '>
        As a dedicated repairman and technician specializing in home audio
        systems, I recently completed a 1-year JavaScript Web Application
        Developer Academy at Semos Macedonia, gaining hands-on experience with
        HTML, CSS, JavaScript, Node.js, and React. Since September, I’ve
        expanded my skills with courses in Transact-SQL, Excel BI with Power
        Query & DAX, Analyzing Data with Excel, and PL-300: Power BI analytics,
        strengthening my development and data expertise. I’m eager to bring my
        creativity, technical skills, and collaborative mindset to projects that
        make an impact. 🚀🚀🚍
      </p>
      {/* { Signature} */}
      <div>
        <Image src={signatureImg} alt='Petroski Martin' />
      </div>
      {/* { Social and resume btn.} */}
      <div className='flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]'>
        {/* { Socials} */}
        <Socials />
        <div className='flex justify-between space-x-2'>
          <a href='/cv.pdf' target='_blank' rel='noopener noreferrer'>
            <Button>
              <FaDownload />
              Resume
            </Button>
          </a>
          <a href='/Cert_Martin.pdf' target='_blank' rel='noopener noreferrer'>
            <Button>
              <FaDownload />
              Certifications
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
}
