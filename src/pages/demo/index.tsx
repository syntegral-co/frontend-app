function Demo() {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="col-start-1 col-end-1 row-start-1 row-end-1 h-96 w-1/3 bg-black">
                <div>A</div>
            </div>
            <div className="col-start-2 col-end-2 row-start-1 row-end-1 w-2/3 bg-black">
                B
            </div>
            <div className="col-start-2 col-end-2 row-start-2 row-end-2 w-2/3 bg-black">
                <input type="text" placeholder="What's on your mind?" />
            </div>
        </div>
    )
}

export default Demo
