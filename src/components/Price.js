function Price() {
    return (
        <div className="p-10 bg-[#2ab2af] sm:rounded-bl-xl text-white">
            <h3 className="font-bold text-lg mb-3">Monthly Subscription</h3>
            <div className="flex items-center">
                <span className="text-3xl font-black mr-1">$29</span>
                <span className="text-sm font-light"> per month</span>
            </div>
            <p className="text-sm mt-2 mb-4">Full access for less than $1 a day</p>
            <button
                className="w-full bg-[#c0df34] border-none py-3 rounded shadow-md font-bold text-sm">Sign Up</button>
        </div>
    );
}

export default Price;