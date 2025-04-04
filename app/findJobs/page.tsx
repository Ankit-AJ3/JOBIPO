"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const FindJobs = () => {
  return (
    <div className="container mx-auto px-8 sm:px-20 py-20 mt-8">
      {/* Search Section */}
      <div className="space-y-4 mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">Find Your Dream Job</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input 
            className="w-full" 
            placeholder="Search jobs..." 
            type="text"
          />
          <Button className="w-full sm:w-auto">Search</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Section */}
        <Card className="lg:col-span-1 h-fit sticky top-4">
          <CardHeader className="space-y-2">
            <CardTitle>Filters</CardTitle>
            <CardDescription className="hidden sm:block">Refine your job search</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="onsite">On-site</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Job Type</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fulltime">Full-time</SelectItem>
                  <SelectItem value="parttime">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full">Apply Filters</Button>
          </CardContent>
        </Card>

        {/* Job Listings Section */}
        <div className="lg:col-span-3 space-y-4">
          {/* Example Job Cards */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <CardTitle className="text-xl">Senior Software Engineer</CardTitle>
                  <CardDescription>Tech Company Inc.</CardDescription>
                </div>
                <Button variant="outline" className="w-full sm:w-auto">Apply Now</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Remote • Full-time</p>
                <p className="text-sm font-medium">$120,000 - $150,000</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <CardTitle className="text-xl">Product Designer</CardTitle>
                  <CardDescription>Design Studio Ltd.</CardDescription>
                </div>
                <Button variant="outline" className="w-full sm:w-auto">Apply Now</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Hybrid • Full-time</p>
                <p className="text-sm font-medium">$90,000 - $120,000</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default FindJobs
