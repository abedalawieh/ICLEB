import React, {useEffect} from 'react'

//importing styles
import './services.css'

//importing assets
import aboutus from '../../Assets/about.JPG'

//importing the aos library
import Aos from 'aos'
import 'aos/dist/aos.css'
import most from "../../Assets/most.jpg"
import security from "../../Assets/security.jpg"
import pen from "../../Assets/pen.jpg"
import planning from "../../Assets/Planning.jpg"

function Services() {

  //creating a scroll animation
  useEffect(() => {
    Aos.init({duration: 3000})
  }, [])

  return (
    <section id='services'>
    <div className="about container">
      <div className="contentDiv flex">

        <div className="aboutUsDiv">
           <div className="aboutUs-images">
            <img data-aos="fade-left" src={most} alt=""/>
          </div>
          <div className="aboutUs-text">
            <h2 data-aos="fade-up">OUR Services</h2>
            <h2 data-aos="fade-up">Packing List & Shipping orders New in Al-Ameen 9.0</h2>

            <p data-aos="fade-up">   <b>Generate the packing lists or shipping orders you need from your invoices easily, with the ability 
to spread an invoice over many packing lists or shipping orders and vice versa.</b>
<ul>
<li>Use volume and weight measures to monitor how much of your packing capacities has been 
used and how much is left</li>



<li>Create as many packing containers as you which (Truck – Loader – 20’ container – 40’ container – 
etc.) and create as much packages types as you wish (Bags – boxes – barrels – etc.)</li>
<li>Use costume fields to enrich the details of your packing lists or delivery orders</li>
<li>You can spread one invoice to many packing lists, and generate a packing lists for many invoices</li>
<li>Print each client’s items separately within a joint packing list or shipping order</li>
<li>Use packing chart to see the details of what is packed in each package of your packing list and 
monitor the idle capacity both per volume or weight for each package</li>




</ul>
            </p>
          </div>
         
        </div>

    
       
        <div className="aboutUsDiv">
           <div className="aboutUs-images">
            <img data-aos="fade-left" src={security} alt=""/>
          </div>
          <div className="aboutUs-text">
          <h2 data-aos="fade-up">Security Systems</h2>

            <h2 data-aos="fade-up">Permission System</h2>

            <p data-aos="fade-up">   <b>A flexible and multi-level permission system 
that can be used by the Accounting Manager 
or the authorized to set the sufficient 
permission to the users or groups of users of 
Al-Ameen.</b>
<ul>
<li>Set a different “maximum discount” and 
“minimum sale price” can be given by any 
user in any invoice type</li>



<li>Control what kind of tickets a user can add, 
view, modify, or delete in every location 
of the program: Account, client, material, 
warehouse, ...etc</li>
<li>Control what kind of cash flows vouchers a 
user can add, view, modify, post, change tax, 
or delete in every location of the program: 
opening entry, cash receive voucher, cash 
payment voucher, ...etc</li>
<li>Control what kind of invoices a user can add, 
view (with multi choices), mark as fulfilled, 
post the accounting entry, modify, delete 
and various other actions, in every location 
of the program: Sales, sales returns, 
purchases, purchases returns, ...etc</li>
<li>Control what kind of commercial papers 
a user can use in the program and what 
events he can perform on it</li>
<li>Use the wide range of permissions option 
that deals with every possible event in the 
program using “operations and reports” 
permission group</li>

<li> Control which list a user can view in the 
menu bar in the program</li>
<li> Use a comprehensive branches permission to 
control what branches a user can deal with</li>
<li>Use the “three code colors permission 
system” in Al-Ameen to prevent a user with 
the green permission level from review all 
red transactions in a certain location for 
example in the program while being able to 
review green and yellow transactions in the 
same location</li>
<li>Define your sample permissions for a similar 
group of users and make them inherent 
these permissions when needed using the 
“group” permission feature</li>
<li>Use the “permissions expander” to specify 
which account, client, warehouse, … etc. 
a user can view during his work with the 
program</li>


</ul>
            </p>
          </div>
         
        </div>
        <div className="aboutUsDiv">
           <div className="aboutUs-images">
            <img data-aos="fade-left" src={planning} alt=""/>
          </div>
          <div className="aboutUs-text">
            <h2 data-aos="fade-up">Planning</h2>

            <p data-aos="fade-up">   <b>Use Al-Ameen planning modules to see how much you have progressed towards your project goal 
and how far you are from your destination. Then, identify what needs to be improved operationally in 
the upcoming year in order to reduce time, effort, and resources in the course of goal achievement..</b>
<ul>
<li> Re-Order Point system ROP, Material Requirement Planning system MRP, ABC classification 
inventory system, Economic Order Quantity EOQ, and Desktop notification system</li>



<li>Classify your materials according to their importance into A, B, or C and use this classification to 
focus your attention on the most important items when studying materials availability</li>
<li> Use one of the most important methods in inventory management ROP (Re-Order Point) or MRP 
(Materials Requirement Planning) to improve your ability to discover, measure, and control your 
needs of new materials according to your plans</li>
<li>Use EOQ (Economic order quantity) in Al-Ameen to see what is the optimum quantity should be 
purchased each time an order is placed (restocking and carrying costs)</li>
<li>Print each client’s items separately within a joint packing list or shipping order</li>
<li>Al-Ameen notification system will remind you when a material will be 
expired, or consumed according to your planned consumption taking 
in consideration current purchases orders’ status</li>




</ul>
            </p>
          </div>
         
        </div>
        <div className="aboutUsDiv">
           <div className="aboutUs-images">
            <img data-aos="fade-left" src={pen} alt=""/>
          </div>
          <div className="aboutUs-text">
            <h2 data-aos="fade-up">Commercial papers (Cheques and promissory notes)</h2>

            <p data-aos="fade-up">   <b>Design as many kinds of commercial papers as you need, and control them through your portfolios.</b>
<ul>
<li>Commercial papers cover all the possible scenarios for deeming their values</li>



<li>Rely on Al-Ameen to make sure that your papers accounts are moving in parallel with your actual 
commercial papers through a specially designed process of portfolio management</li>
<li>All accounting entries are automatically generated upon performing any event on the commercial 
papers, with the ability to charge penalties or commissions on them</li>
<li> Collect or pay a set of commercial papers with one operation through a special tool.</li>
<li>Use commercial papers to deem the value of an invoice directly from it and automatically relate 
them to each other</li>

</ul>
            </p>
          </div>
         
        </div>

      </div>
    </div>

</section>

  )
}

export default Services