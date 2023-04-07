
import { Bar } from 'react-chartjs-2';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import './BarChart.css'
import { useState, useRef, useEffect } from 'react'
import { Chart, LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip } from 'chart.js';
Chart.register(
    LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip
)

const options = {
    plugins: {
        legend: {
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'Order Details'
        }
    }
}

const BarChart = () => {
    const [isOptionsShow, setIsOptionsShow] = useState(false)
    const [target, setTarget] = useState(null);
    const [chartData, setChartData] = useState(null)
    const [options, setOptions] = useState({ plugins: {
        legend: {
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'Order Details(Last 7 Days)'
        }
    }})

    const ref = useRef(null);

 


    useEffect(() => {
        const labels = ['Order Inprogress', 'Completed Orders', 'Failed Orders']
        const data = {
            labels,
            datasets: [
                {
                    label: 'Count',
                    data: [5, 3, 4],
                    backgroundColor: 'rgba(54, 121, 255, 1)',
                    
                },
                {
                    label: 'Amount',
                    data: [15, 9, 13],
                    backgroundColor: 'rgba(0, 208, 255, 1)'
                }
            ],
        };

        setChartData(data)

    }, [])

    const handleOptionsClick = (e, str) => {
            e.preventDefault()

            const labels = ['Order Inprogress', 'Completed Orders', 'Failed Orders']
            
            const data = {
                labels,
                datasets: [
                   
                ]
            };
        if(str === 'Last 7 Days') {

            data.datasets.push({
                label: 'Count',
                data: [5, 3, 4],
                backgroundColor: 'rgba(54, 121, 255, 1)',
               
            },
            {
                label: 'Amount',
                data: [15, 9, 13],
                backgroundColor: 'rgba(0, 208, 255, 1)'
            })

            setOptions({ plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Order Details(Last 7 Days)'
                }
            }})
        } else if(str === "Last 30 Days") {
            data.datasets.push({
                label: 'Count',
                data: [15, 13, 14],
                backgroundColor: 'rgba(54, 121, 255, 1)',
               
            },
            {
                label: 'Amount',
                data: [45, 39, 42],
                backgroundColor: 'rgba(0, 208, 255, 1)'
            })

            setOptions({ plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Order Details(Last 30 Days)'
                }
            }})

        }else if(str === "Last 3 Months") {
            data.datasets.push({
                label: 'Count',
                data: [155, 139, 143],
                backgroundColor: 'rgba(54, 121, 255, 1)',
               
            },
            {
                label: 'Amount',
                data: [450, 395, 420],
                backgroundColor: 'rgba(0, 208, 255, 1)'
            })
            setOptions({ plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Order Details(Last 3 Months)'
                }
            }})
        }else if(str === "Last 6 Months") {
            data.datasets.push({
                label: 'Count',
                data: [355, 439, 343],
                backgroundColor: 'rgba(54, 121, 255, 1)'
                
            },
            {
                label: 'Amount',
                data: [950, 695, 820],
                backgroundColor: 'rgba(0, 208, 255, 1)'
            })
            setOptions({ plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Order Details(Last 6 Months)'
                }
            }})
        }
        
        
        setChartData(data)
        
        console.log('STR', str)
    }



    const onHandleOptions = (event) => {
        console.log('TEST')
        event.preventDefault()
        setIsOptionsShow(!isOptionsShow)
        setTarget(event.target);

    }

    return (
        <div className = 'container chart-cls mt-5'>

            <div onClick={(e) => onHandleOptions(e)} ref={ref}
                className="options-cls">
                <i class="fa fa-ellipsis-h options-icon" aria-hidden="true"></i>
                <Overlay
                    show={isOptionsShow}
                    target={target}
                    placement="bottom"
                    container={ref}
                    containerPadding={20}
                >
                    <Popover id="popover-contained">
                        <ul className="list-cls">
                            <li className = 'list-items' onClick={(e) => handleOptionsClick(e, 'Last 7 Days')}>Last 7 Days</li>
                            <li className = 'list-items' onClick={(e) => handleOptionsClick(e, 'Last 30 Days')}>Last 30 Days</li>
                            <li className = 'list-items' onClick={(e) => handleOptionsClick(e, 'Last 3 Months')}>Last 3 Months</li>
                            <li className = 'list-items' onClick={(e) => handleOptionsClick(e, 'Last 6 Months')}>Last 6 Months</li>
            
                        </ul>
                    </Popover>
                </Overlay>

            </div>

                {
                    chartData ? 
                    <Bar options={options} data={chartData}   className = 'overlay'/>
                : ''}
            

        </div>
    )
}
export default BarChart;