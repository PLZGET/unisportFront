/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/jwWVYV7aIRe
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Rubik } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function Announcements() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">유니스포츠</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            홈
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            시설
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            예약
          </Link>
          <Link href="#" className="hover:underline font-semibold" prefetch={false}>
            공지사항
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            계정
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost">
            <UserIcon className="h-5 w-5" />
            <span className="sr-only">프로필</span>
          </Button>
          <Button variant="outline">로그인</Button>
        </div>
      </header> */}
      <main className="flex-1 py-8 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">공지사항</h1>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>새로운 시설 오픈</CardTitle>
                <CardDescription>2023-04-15</CardDescription>
              </CardHeader>
              <CardContent>
                <p>새로운 스포츠 시설 오픈을 알려드립니다! 다음 주부터 예약이 가능합니다.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>시설 유지보수</CardTitle>
                <CardDescription>2023-03-30</CardDescription>
              </CardHeader>
              <CardContent>
                <p>4월 1일부터 4월 15일까지 농구장 폐쇄 예정입니다. 불편을 드려 죄송합니다.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>새로운 예약 시스템</CardTitle>
                <CardDescription>2023-02-28</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  시설 예약이 더 쉽도록 새로운 예약 시스템을 업데이트했습니다. 문의사항이 있으시면 연락주시기 바랍니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      {/* <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">유니스포츠 소개</h3>
            <p>유니스포츠는 학생과 교직원이 캠퍼스 내 스포츠 시설을 쉽게 예약하고 관리할 수 있는 플랫폼입니다.</p>
            <p>
              문의: <a href="#">info@unisport.com</a>
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">법적 정보</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              이용 약관
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              개인정보 보호 정책
            </Link>
          </div>
          <div className="space-y-2 md:col-span-2 flex justify-center md:justify-start gap-4">
            <Link href="#" className="hover:text-primary" prefetch={false}>
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-primary" prefetch={false}>
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-primary" prefetch={false}>
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
