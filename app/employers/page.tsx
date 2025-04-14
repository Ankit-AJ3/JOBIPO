'use client'

import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const EmployersPage = () => {
  return (
    <div className="container mx-auto px-8 sm:px-20 py-8 mt-16">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-center">Find Employers</h1>
        <p className="text-muted-foreground mt-2">Discover and connect with top companies hiring now</p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex gap-4 mb-8">
        <div className="flex-1">
          <Input 
            placeholder="Search employers..." 
            className="w-full"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Industries</SelectItem>
            <SelectItem value="tech">Technology</SelectItem>
            <SelectItem value="health">Healthcare</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
          </SelectContent>
        </Select>
        <Button>Search</Button>
      </div>

      {/* Employers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Employer Card - You can map through actual data */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <CardTitle>Company {item}</CardTitle>
                  <CardDescription>Technology • San Francisco</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Leading technology company specializing in innovative solutions for enterprise customers.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">50-200 employees</div>
              <Button variant="outline">View Profile</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default EmployersPage
