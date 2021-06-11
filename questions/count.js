function Counter() {
    const [counter, setCounter] = useState(0)
    counter = useSelector(store => store.counter)

    let timeout;
    useEffect(() => {
        timeout = setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1000)

        return () => {
            clearInterval(timeout)
        }
    }, [])

    // Read useMemo , useCalback

    return (
        <div>

            {counter}
        </div>
    )
}

connect()()

useSelect(store => store.)
