# Bárbara Barros Carlos

Hello, I am Bárbara! I work at the intersection of numerical optimization, control, and estimation for robotics — mostly Nonlinear Model Predictive Control (NMPC) and Moving Horizon Estimation (MHE), with a focus on getting them running in real time on embedded hardware. I've worked on embedded numerical optimization for quadrotors at the Systems Control and Optimization (syscop) Laboratory in Freiburg, Germany, and on embedded NMPC and optimization-based shared control at the Robotics and InteractionS (RIS) team at LAAS-CNRS in Toulouse, France.
<br />
I like bridging theory and practice — taking advanced control and estimation algorithms out of the paper and into safety-critical, dynamic environments.

## Experience
- [Parrot](https://www.parrot.com/en) — State Estimation & Sensor Fusion Engineer <br />
  *Paris, France · Jul 2026 – Present*
  - Improving GNSS-denied navigation robustness for state estimation on autonomous drones
  - Enhancing sensor fusion algorithms combining IMU, GPS, and visual odometry for improved accuracy

- [Stanley Robotics](https://www.stanley-robotics.com) — Trajectory Planning, Control & State Estimation Engineer <br />
  *Paris, France · May 2022 – Jun 2026*
  - Owned Stan's navigation stack, acting as the primary decision-maker or approver for navigation-related choices
  - Performed system identification to better characterize the actuation subsystem's dynamics, improving control accuracy and simulation fidelity
  - Designed and deployed a real-time nonlinear model predictive contouring controller (NMPCC) for trajectory tracking
  - Extended the NMPCC to an offset-free formulation, including the design and implementation of a disturbance observer for robustness to unmeasured disturbances
  - Designed and deployed a bicycle-model-based Extended Kalman Filter (EKF) for robot localisation
  - Developed kinodynamically-feasible trajectory replanning based on sequential quadratic programming (SQP)
  - Coordinated across teams to align fleet-level decision-making with single-robot navigation strategies
  - Improved the robot mock — a simplified simulator used for testing navigation development — to better reflect real-world dynamics

- ITIC — Researcher <br />
  *Fortaleza, Brazil · Mar 2015 – Jun 2017*
  - Served as hardware technician for a quadrotor research platform
  - Developed an autopilot system based on the BeagleBone Black
  - Authored technical documentation for research projects

- LIT/IFCE — Undergraduate Research Assistant <br />
  *Fortaleza, Brazil · Aug 2014 – Aug 2017*
  - Designed and built a quadrotor prototype

- ITIC — Education Robotics Teacher <br />
  *Fortaleza, Brazil · Dec 2013 – Dec 2014*
  - Developed embedded systems projects based on the PIC 18FXX5X microcontroller
  - Taught foundational logic, programming, electricity, and electronics to students

## Education
- Sapienza Università di Roma — Postdoctoral Research Fellow <br />
  *Rome, Italy · May 2021 – May 2022*<br />
   Line of research:
    - NMPC for unmanned aerial vehicles (UAVs)

- Sapienza Università di Roma — PhD in Automatica, Bioingegneria e Ricerca Operativa <br />
  *Rome, Italy · Nov 2017 – Jul 2021*<br />
  Thesis:
  - Real-Time Nonlinear Model Predictive Control for Motion Generation in Robotics Systems

- Laboratoire d'analyse et d'architecture des systèmes (LAAS - CNRS) — Visiting PhD Student <br />
  *Toulouse, France · Oct 2019 – Mar 2020*<br />
  Lines of research:
  - Embedded NMPC applied to quadrotors
  - Human-quadrotor mixed-initiative control via real-time NMPC
  - NMPC for quadrotor-slung payload system for the task of transportation on suspension

- IMTEK, University of Freiburg — Visiting PhD Student <br />
  *Freiburg, Germany · May 2019 – Oct 2019*<br />
  Lines of research:
  - Least conservative constraint formulation for real-time motion generation of the Crazyflie nanoquadrotor
  - Sensitivity-based real-time NMPC applied to quadrotors
  - NMPC for periodic motion generation and orbital stabilization of a double-inverted pendulum
  - Gain expertise in embedded numerical optimization methods

- Instituto Federal do Ceará — BSc in Mechatronics Engineering <br />
  *Fortaleza, Brazil · Aug 2013 – Jun 2017*<br />
  Thesis:
  - Modeling, Control and Simulation of a Quadrotor for Attitude Stabilization

## Publications
- Conference Papers<br />
  **[Real-Time NMPC for an Automated Valet Parking with Loaded-Based Safety Constraints and a Path-Parametric Model](https://ieeexplore.ieee.org/abstract/document/10342085)**<br />
  *B. Barros Carlos, M. Williams, and B. Pelourdeau* — International Conference on Intelligent Robots and Systems (IROS), 2023

  **[An Efficient Real-Time NMPC for Quadrotor Position Control under Communication Time-Delay](https://ieeexplore.ieee.org/abstract/document/9305513)**<br />
  *B. Barros Carlos, T. Sartor, A. Zanelli, G. Frison, W. Burgard, M. Diehl, and G. Oriolo* — International Conference on Control, Automation, Robotics and Vision (ICARCV), 2020

- Journal Articles<br />
  **[Towards Safe Human-Quadrotor Interaction: Mixed-Initiative Control via Real-Time NMPC](https://ieeexplore.ieee.org/abstract/document/9483586)**<br />
  *B. Barros Carlos, A. Franchi, and G. Oriolo* — IEEE Robotics and Automation Letters (RA-L), 2020

  **[Least Conservative Linearized Constraint Formulation for Real-Time Motion Generation](https://www.sciencedirect.com/science/article/pii/S2405896320330895)**<br />
  *B. Barros Carlos, T. Sartor, A. Zanelli, M. Diehl, and G. Oriolo* — IFAC-PaperOnLine, 2020

  **[Enforcing Constraints over Learned Policies via Nonlinear MPC: Application to the Pendubot](https://www.sciencedirect.com/science/article/pii/S2405896320331086)**<br />
  *G. Turrisi, B. Barros Carlos, M. Cefalo, V. Modugno, L. Lanari, and G. Oriolo* — IFAC-PaperOnLine, 2020

## Mentoring
- Stanley Robotics — Internship & MSc Thesis Supervisor <br />
  *Paris, France · 2025* <br />
  - NMPC framework for safe and robust navigation of Stan in narrow lanes under unmeasured disturbances

- Sapienza Università di Roma — MSc Thesis Supervisor <br />
  *Rome, Italy · 2021* <br />
  - Distributed NMPC for tracking and formation control of multi-UAV systems in forest-like environments

- Sapienza Università di Roma — Project Supervisor <br />
  *Rome, Italy · 2018* <br />
  - Flying inverted pendulum, supervised for a 1st-year student of Scuola Superiore di Studi Avanzati Sapienza (SSAS)
  - Nonlinear observability and estimation via the dynamic bearing observability matrix for multi-agent systems, supervised for the Control of Autonomous Multi-Agent Systems course

## Community
- [Efficient Real-Time NMPC for the Crazyflie 2.1 nanoquadrotor](https://github.com/bcbarbara/crazyflie_nmpc) <br />
  *Open-source ROS stack · 2019* <br />
  - Modular, real-time NMPC implementation tailored to the Crazyflie 2.1, with time-delay compensation and actuator bound enforcement
  - Built on [acados](https://github.com/acados/acados), leveraging its real-time iteration SQP scheme with Gauss-Newton Hessian approximation
  - Quadratic subproblems solved via [HPIPM](https://github.com/giaf/hpipm) (interior-point method) on top of [BLASFEO](https://github.com/giaf/blasfeo), with partial condensing applied to further reduce solution times

## Skills
<div className="skills-grid">
  <div className="skill-col">
    <p><strong>Programming Languages</strong><br />C++, C, Python, MATLAB</p>
    <p><strong>Building Systems</strong><br />Catkin, CMake, Make</p>
    <p><strong>Development Tools</strong><br />VS Code, PyCharm, Terminal</p>
    <p><strong>Numerical Optimization</strong><br />CasADi, ACADO, acados</p>

  </div>
  <div className="skill-col">
    <p><strong>NMPC Solvers</strong><br />HPIPM, qpOASES, IPOPT</p>
    <p><strong>Visualization</strong><br />Foxglove, RViz</p>
    <p><strong>Robot Simulators</strong><br />Gazebo, PyBullet</p>
    <p><strong>Operating Systems</strong><br />Linux, macOS</p>
  </div>
  <div className="skill-col">
    <p><strong>Hardware</strong><br />ATmega32, ARM Cortex-A8</p>
    <p><strong>Middleware</strong><br />ROS, GenoM3</p>
    <p><strong>Misc</strong><br />Git, LaTeX, Docker</p>
  </div>
</div>
