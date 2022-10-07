import { NextRequest, NextResponse } from 'next/server'



export default function middleware(req){
    const loggedin = req.cookies.get('loggedin')
    const url = req.url
    console.log("new")
    console.log(loggedin)

    if(url.includes('staff') && url.includes('dashboard')){
        if(loggedin == undefined){
            return NextResponse.rewrite(new URL('/staff', req.url))
        }

        try{
            return NextResponse.next();
        }catch(e){
            return NextResponse.rewrite(new URL('/staff', req.url))
        }
    }
    
    if(url.includes('staff')){
        if(loggedin){
            return NextResponse.rewrite(new URL('/staff/dashboard', req.url))
        }

        try{
            return NextResponse.next();
        }catch(e){
            return NextResponse.rewrite(new URL('/staff', req.url))
        }
    }

    

    return NextResponse.next();
 }