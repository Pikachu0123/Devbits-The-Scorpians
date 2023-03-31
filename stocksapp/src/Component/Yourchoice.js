import React from 'react'

const Yourchoice = () => {
  return (
    <>
    <section>
        <div className='work-container container'>
            <div className='row1'>
            <h2 className='main-heading text-center'>Your money. Your choice</h2>
            </div>
            <div className='Bigrow'>
            <div className='row2'>
                <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                <i class="fa-solid fa-money-bill-trend-up"></i>
                <h4 className='sub-heading'>Stocks</h4>
                <p></p>
                </div>
            </div>
            <div className='row2'>
                <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                <i class="fa-solid fa-arrow-trend-up"></i>
                <h4 className='sub-heading'>Mutual fund</h4>
                {/* <p></p> */}
                </div>
            </div>
            <div className='row2'>
                <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                <i class="fa-solid fa-user"></i>
                <h4 className='sub-heading'>Portfolio</h4>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Yourchoice
