let os=require ('os')

let arch=os.arch()
console.log(arch)

let cpu=os.cpus()
console.log(cpu)

// let platfrom=os.platform()
// console.log(platfrom)

// let free=os.freemem()
// console.log(free)

// let size=3657199616
// let gb=size/1024/1024/1024
// console.log(gb,"GB")

// let md=gb*1024
// console.log(md,"MB")

// let kb=md*1024
// console.log(kb,"KB")

var free_memory = os.freemem();
var free_mem_in_kb = free_memory/1024;
var free_mem_in_mb = free_mem_in_kb/1024;
var free_mem_in_gb = free_mem_in_mb/1024;
   
free_mem_in_kb = Math.floor(free_mem_in_kb);
free_mem_in_mb = Math.floor(free_mem_in_mb);
free_mem_in_gb = Math.floor(free_mem_in_gb);
   
free_mem_in_mb = free_mem_in_mb%1024;
free_mem_in_kb = free_mem_in_kb%1024;
free_memory = free_memory%1024;
  
console.log("Free memory: " + free_mem_in_gb + "GB "
      + free_mem_in_mb + "MB " + free_mem_in_kb
      + "KB and " + free_memory + "Bytes");