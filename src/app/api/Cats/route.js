import catModel from "@/models/cat";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cats = await catModel.find();

    return NextResponse.json({ cats }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

//   return NextResponse.json({
//     tickets: [
//       {
//         _id: "6651e4a5156793d9cacfc95d",
//         title: "hjvj",
//         description: "vhvhvhg",
//         category: "Software Problem",
//         priority: 3,
//         progress: 14,
//         status: "started",
//         createdAt: "2024-05-25T13:16:21.226Z",
//         updatedAt: "2024-05-25T13:16:21.226Z",
//         __v: 0,
//       },
//     ],
//   });
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const ticketData = body.formData;

//     await Ticket.create(ticketData);

//     return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json({ message: "Error", err }, { status: 500 });
//   }
// }
