select c.name, b.name, p.name, p.cost
	from customers c 
    join builds b
		on c.id = b.customerId
    join build_parts_xref bps    
		on b.id = bps.buildId
    join parts p
		on p.id = bps.partId