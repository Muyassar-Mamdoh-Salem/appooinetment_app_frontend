import { Button } from '@/components/ui/Button'
import React from 'react'

function Hero() {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-lime-600 sm:text-3xl">
                                    Your Health , just a click Away
                                </h2>

                                <p className="mt-4 text-gray-700">
                                    search compare, and back appointments with top doctors anytime anywhere Access quality healthcare from the comfort of your home
                                </p>
                                <Button className="p-2 bg-lime-600 text-white mt-4">Explore Now</Button>
                            </div>
                        </div>

                        <div>
                            <img
                                src='assets\image\hero.png'
                                className="rounded"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero