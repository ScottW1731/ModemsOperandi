use pc_builder;

## Full build report
select c.name as customerName, b.id as buildId, b.name, sum(cost) as total, customerId 
	from parts p 
	join builds b
	join customers c
        on p.buildId = b.id && c.id = b.customerId;