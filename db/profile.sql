#Get all customer's build(s) details (profile)
select c.name, b.name, b.category, p.name, p.cost
	from customers c 
    join builds b
		on c.id = b.customerId
    join build_parts_xref bps    
		on b.id = bps.buildId
    join parts p
		on p.id = bps.partId;


#select * from Builds;
#select * from builds;

#select * from Customers;
#select * from customers;
		