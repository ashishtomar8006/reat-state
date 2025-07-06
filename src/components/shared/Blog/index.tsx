import React from 'react';
import BlogCard from '@/components/shared/Blog/blogCard';
import { getAllPosts } from '@/components/utils/markdown';
import { Icon } from "@iconify/react";
import Link from 'next/link';

interface Blog {
    title: string;
    date: string;
    excerpt: string;
    coverImage: string;
    slug: string;
    detail: string;
    tag: string;
}

const BlogSmall: React.FC = () => {
    // Get all posts and map over them to ensure each field is a string
    const posts: Blog[] = getAllPosts(["title", "date", "excerpt", "coverImage", "slug", "tag"])
        .map(item => ({
            title: typeof item.title === 'string' ? item.title : String(item.title),
            date: typeof item.date === 'string' ? item.date : String(item.date),
            excerpt: typeof item.excerpt === 'string' ? item.excerpt : String(item.excerpt),
            coverImage: typeof item.coverImage === 'string' ? item.coverImage : String(item.coverImage),
            slug: typeof item.slug === 'string' ? item.slug : String(item.slug),
            detail: typeof item.detail === 'string' ? item.detail : String(item.detail),
            tag: typeof item.tag === 'string' ? item.tag : String(item.tag),
        }))
        .slice(0, 2); // Show only 2 posts

    return (
        <section className="py-16">
            <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
                <div className='flex justify-between md:items-end items-start mb-12 md:flex-row flex-col'>
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Icon icon="ph:house-simple-fill" className="text-2xl text-primary" aria-label="Home icon" />
                            <span className="text-base font-semibold text-dark/75 dark:text-white/75">Updates</span>
                        </div>
                        <h2 className="lg:text-52 text-40 font-medium dark:text-white mb-4">
                            Latest Updates
                        </h2>
                        <p className='text-dark/50 dark:text-white/50 text-lg max-w-2xl'>
                            Learn what's new at Jubilee Clio and discover what's happening behind the scenes to stay updated.
                        </p>
                    </div>
                    <Link 
                        href="/blogs" 
                        className='bg-dark dark:bg-white text-white dark:text-dark py-4 px-8 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white duration-300 font-medium' 
                        aria-label="Read all blog articles"
                    >
                        Read all articles
                    </Link>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
                    {posts.map((blog, i) => (
                        <div key={i} className="w-full">
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogSmall;