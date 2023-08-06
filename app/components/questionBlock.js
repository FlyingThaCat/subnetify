const QuestionBlock = (datas) => {
    return (
        <div className="flex bg-white flex-col items-center justify-center rounded-lg mx-4 p-4">
            <h1>Question</h1>
            {/* gicen ip section */}
            <div className="flex flex-row items-center justify-center">
                <h1 className="text-2xl">Given IP:  </h1>
                <h1 className="text-2xl">
                    {datas.datas.ip}/{datas.datas.cidr}
                </h1>
            </div>
        </div>
    )
}

export default QuestionBlock