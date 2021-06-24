<template>
   <div class="pricing d-flex justify-content-around p-3">
      <!-- Free Tier -->
      <b-col md="3" sm="12">
         <b-card class="mb-5 mb-lg-0">
            <b-card-body >
               <h6 class="card-price text-center">FREE<span class="period">/month</span></h6>
               <hr>
               <ul class="fa-ul">
                  <li>
                     <font-awesome-icon :icon="['fas', 'check']"/>
                     Single User
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'check']"/>
                     3 Days a Week
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'times']"/>
                     Video Recording
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'times']"/>
                     Thoery Sessions
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'times']"/>
                     Doubt Sessions
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'times']"/>
                     Competitive Exams
                  </li>
               </ul>
            </b-card-body>
            <b-card-footer class="text-center">
               <NuxtLink
                  class="btn btn-outline-danger text-capitalize"
                  to="/joinUs">
                  Register Now
               </NuxtLink>
            </b-card-footer>
         </b-card>
      </b-col>
      <b-col md="3" sm="12">
         <b-card class="mb-5 mb-lg-0">
            <b-card-body >
               <h6 class="card-price text-center">&#8377;700<span class="period">/month</span></h6>
               <hr>
               <ul class="fa-ul">
                  <li>
                     <font-awesome-icon :icon="['fas', 'check']"/>
                     Single User
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'check']"/>
                     4 Days a Week
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'check']"/>
                     Video Recording
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'check']"/>
                     Thoery Sessions
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'times']"/>
                     Doubt Sessions
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'times']"/>
                     Competitive Exams
                  </li>
               </ul>
            </b-card-body>
            <b-card-footer class="text-center">
               <NuxtLink
                  class="btn btn-outline-danger text-capitalize"
                  to="/joinUs">
                  Register Now
               </NuxtLink>
            </b-card-footer>
         </b-card>
      </b-col>
      <b-col md="3" sm="12">
         <b-card class="mb-5 mb-lg-0">
            <b-card-body>
               <h6 class="card-price text-center">&#8377;1000<span class="period">/month</span></h6>
               <hr>
               <ul class="fa-ul">
                  <li >
                     <font-awesome-icon :icon="['fas', 'check']"/>
                     2 User
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'check']"/>
                     6 Days a Week
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'check']"/>
                     Video Recording
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'check']"/>
                     Thoery Sessions
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'check']"/>
                     Doubt Sessions
                  </li>
                  <li>
                     <font-awesome-icon :icon="['fas', 'check']"/>
                     Competitive Exams
                  </li>
               </ul>
            </b-card-body>
            <b-card-footer class="text-center">
               <NuxtLink
                  class="btn btn-outline-danger text-capitalize"
                  to="/joinUs">
                  Register Now
               </NuxtLink>
            </b-card-footer>
         </b-card>
      </b-col>
   </div>
   <!-- Plus Tier -->
</template>
<style>
.pricing {
  background: white;
  background: linear-gradient(to right, #e6002a, #e2345c);
}

.pricing .card {
  border: 2px solid crimson;
  border-radius: 1rem;
  transition: all 0.2s;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.pricing .card-price {
  font-size: 3rem;
  margin: 0;
}

.pricing .card-price .period {
  font-size: 0.8rem;
}

.pricing ul li {
  margin-bottom: 1rem;
}

.pricing .btn {
  font-size: 100%;
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  padding: 1rem;
  opacity: 0.7;
  transition: all 0.2s;
}

/* Hover Effects on Card */
@media (min-width: 992px) {
  .pricing .card:hover {
    margin-top: -0.25rem;
    margin-bottom: 0.25rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
  }

  .pricing .card:hover .btn {
    opacity: 1;
  }
}
</style>
