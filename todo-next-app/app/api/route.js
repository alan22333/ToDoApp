import { connectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/ToDoModel";
import { NextResponse } from "next/server";

const LoadDB = async()=>{
    await connectDB();
}

LoadDB();

export async function GET(request){
    const todos = await TodoModel.find({});
    return NextResponse.json({
        todos:todos
    })
}
export async function POST(request){
    const {title,description} = await request.json();

    await TodoModel.create({
        title:title,
        description:description
    })

    return NextResponse.json({
        msg:"ToDo created"
    })
}

export async function DELETE(request){
    const mongoId = await request.nextUrl.searchParams.get("mongoId")
    await TodoModel.findByIdAndDelete(mongoId)
    return NextResponse.json({
        msg:"ToDo deleted"
    })
}

export async function PUT(request){
    const mongoId = await request.nextUrl.searchParams.get("mongoId")
    await TodoModel.findByIdAndUpdate(mongoId,{
        $set:{
            isCommpleted:true
        }
    });
    return NextResponse.json({
        msg:"ToDo finished, good job!!"
    })
}

