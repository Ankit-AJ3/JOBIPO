import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const CandidatesPage = () => {
  const candidates = [
    {
      "id": 1,
      "name": "Alice Smith",
      "role": "Backend Developer",
      "status": "Placed",
      "company": "Tech Solutions Ltd",
      "package": "₹16,50,000",
      "image": "/avatars/alice.png" // Add actual image paths
    },
    {
      "id": 2,
      "name": "John Doe",
      "role": "Frontend Developer",
      "status": "Placed",
      "company": "Digital Innovations",
      "package": "₹14,00,000",
      "image": "/avatars/john.png"
    },
    {
      "id": 4,
      "name": "Michael Brown",
      "role": "Full Stack Developer",
      "status": "Placed",
      "company": "Global Systems",
      "package": "₹22,00,000"
    },
    {
      "id": 7,
      "name": "Olivia Martinez",
      "role": "QA Engineer",
      "status": "Placed",
      "company": "Quality Tech",
      "package": "₹12,50,000"
    },
    {
      "id": 1,
      "name": "Alice Smith",
      "role": "Backend Developer",
      "status": "Placed",
      "company": "Tech Solutions Ltd",
      "package": "₹16,50,000",
      "image": "/avatars/alice.png" // Add actual image paths
    },
    {
      "id": 2,
      "name": "John Doe",
      "role": "Frontend Developer",
      "status": "Placed",
      "company": "Digital Innovations",
      "package": "₹14,00,000",
      "image": "/avatars/john.png"
    },
    {
      "id": 4,
      "name": "Michael Brown",
      "role": "Full Stack Developer",
      "status": "Placed",
      "company": "Global Systems",
      "package": "₹22,00,000"
    },
    {
      "id": 7,
      "name": "Olivia Martinez",
      "role": "QA Engineer",
      "status": "Placed",
      "company": "Quality Tech",
      "package": "₹12,50,000"
    }
  ]

  return (
    <div className="p-6 mt-16">
      <div className="justify-between items-center mb-6 text-center">
        <h1 className="text-2xl font-bold">Placed Candidates</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-16 my-20 mt-8">
        {candidates.map((candidate) => (
          <Card key={candidate.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={candidate.image} alt={candidate.name} />
                    <AvatarFallback>
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span>{candidate.name}</span>
                </div>
                <span className="text-sm font-normal bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Placed
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Role</span>
                <span className="font-medium">{candidate.role}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Company</span>
                <span className="font-medium">{candidate.company}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Package</span>
                <span className="font-medium text-green-600">{candidate.package}</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CandidatesPage
