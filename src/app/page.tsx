'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components/Card';
import { Skeleton } from './components/Skeleton';
import { Alert, AlertDescription } from './components/Alert';
import { AlertCircle } from 'lucide-react';
import { ArrowUpRight, DollarSign } from 'lucide-react';
import { useFetchCoinData } from './hooks/useFetchCoinData';
import { formatCurrency } from './utils/formatCurrency';

const BlogPage = () => {
  const apiKey = 'e22d511a0ae00940ae30ae634b5ad36a';
  const { loading, data, error } = useFetchCoinData(apiKey);

  
   
    const [blogs] = useState([
      {
        title: "Understanding Crypto Markets",
        excerpt: "A deep dive into cryptocurrency market dynamics and trading patterns.",
        author: "Jane Smith",
        date: "2024-11-10"
      },
      {
        title: "Bitcoin's Evolution",
        excerpt: "Tracing the journey of Bitcoin from its inception to present day.",
        author: "John Doe",
        date: "2024-11-09"
      },
      {
        title: "Ethereum 2.0 Updates",
        excerpt: "Latest developments in the Ethereum ecosystem and its impact.",
        author: "Alex Johnson",
        date: "2024-11-08"
      },
      {
        title: "Crypto Trading Strategies",
        excerpt: "Expert insights into successful cryptocurrency trading approaches.",
        author: "Maria Garcia",
        date: "2024-11-07"
      },
      {
        title: "DeFi Platforms Review",
        excerpt: "Comparing major DeFi platforms and their unique offerings.",
        author: "David Lee",
        date: "2024-11-06"
      },
      {
        title: "Blockchain Security",
        excerpt: "Essential security practices for cryptocurrency investors.",
        author: "Sarah Wilson",
        date: "2024-11-05"
      }
    ]);



  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {loading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="space-y-4">
            <Skeleton className="h-12 w-48 bg-blue-200 animate-pulse" />
            <div className="flex space-x-4">
              <Skeleton className="h-4 w-24 bg-blue-100 animate-pulse" />
              <Skeleton className="h-4 w-24 bg-blue-100 animate-pulse" />
            </div>
          </div>
        </div>
      )}

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Error loading cryptocurrency data: {error}
          </AlertDescription>
        </Alert>
      )}

      <Card className="mb-8 bg-gradient-to-r from-blue-900 to-red-600  text-white">
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="mr-2" />
            Live Cryptocurrency Rates
          </CardTitle>
          {data?.timestamp && (
            <p className="text-sm opacity-75">
              Last updated: {new Date(data.timestamp * 1000).toLocaleString()}
            </p>
          )}
        </CardHeader>


        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data?.rates ? (
              Object.entries(data.rates)
                .slice(0, 9)
                .map(([coin, rate]) => (
                  <div key={coin} className="bg-white/10 p-3 rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
                    <div className="font-bold">{coin}</div>
                    <div className="text-sm opacity-90">{formatCurrency(rate)}</div>
                  </div>
                ))
            ) : (
              Array(8).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-16 bg-white/20" />
              ))
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <Card key={index} className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span>{blog.title}</span>
                <ArrowUpRight className="w-4 h-4 text-blue-500" />
              </CardTitle>
              <div className="text-sm text-gray-500">
                {blog.author} • {blog.date}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{blog.excerpt}</p>
              <button className="mt-4 text-blue-500 hover:text-blue-700 font-medium">
                Read more →
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
