const AnswerBlock = (answer) => {
    return (
        <div className="flex bg-white flex-col items-center justify-center rounded-lg mx-4 p-4">
            <h1>Answer</h1>
            {/* gicen ip section */}
            <div className="flex flex-row items-center justify-center">
                <h1 className="text-2xl">Given IP:  </h1>
            </div>
        </div>
    )
}

export default AnswerBlock