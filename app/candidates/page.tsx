import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"

const CandidatesPage = () => {
  const candidates = [
    {
        "id": 1,
        "name": "Alice Smith",
        "email": "alice@example.com",
        "role": "Backend Developer",
        "status": "Active"
      },
      {
        "id": 2,
        "name": "John Doe",
        "email": "john@example.com",
        "role": "Frontend Developer",
        "status": "Active"
      },
      {
        "id": 3,
        "name": "Emma Johnson",
        "email": "emma@example.com",
        "role": "UI/UX Designer",
        "status": "Inactive"
      },
      {
        "id": 4,
        "name": "Michael Brown",
        "email": "michael@example.com",
        "role": "Full Stack Developer",
        "status": "Active"
      },
      {
        "id": 5,
        "name": "Sophia Davis",
        "email": "sophia@example.com",
        "role": "Project Manager",
        "status": "Inactive"
      },
      {
        "id": 6,
        "name": "Daniel Wilson",
        "email": "daniel@example.com",
        "role": "DevOps Engineer",
        "status": "Active"
      },
      {
        "id": 7,
        "name": "Olivia Martinez",
        "email": "olivia@example.com",
        "role": "QA Engineer",
        "status": "Active"
      },
      {
        "id": 8,
        "name": "James Anderson",
        "email": "james@example.com",
        "role": "Software Architect",
        "status": "Inactive"
      },
      {
        "id": 9,
        "name": "Isabella Thomas",
        "email": "isabella@example.com",
        "role": "Mobile Developer",
        "status": "Active"
      },
      {
        "id": 10,
        "name": "Ethan White",
        "email": "ethan@example.com",
        "role": "Data Scientist",
        "status": "Inactive"
      },
    // Add more candidate data as needed
  ]

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Candidates</h1>
        <div className="flex gap-4">
          <Input 
            placeholder="Search candidates..." 
            className="w-64"
          />
          <Button>Add Candidate</Button>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.id}>
                <TableCell>{candidate.name}</TableCell>
                <TableCell>{candidate.email}</TableCell>
                <TableCell>{candidate.role}</TableCell>
                <TableCell>{candidate.status}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default CandidatesPage
