
// useState Hook ****

const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };


  //Fetch data from server..

  useEffect(()=> {
    const fetchApi=async()=> {
        setDailyData(await fetchDailyData());
    }
    notify();
    fetchApi();
},[])


