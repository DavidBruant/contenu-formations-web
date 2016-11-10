import moment from 'moment';

export default function getDays(commits){
	var jourSemaine = {
		'Monday':0,
		'Tuesday' :0, 
		'Wednesday':0, 
		'Thursday':0, 
		'Friday':0, 
		'Saturday':0, 
		'Sunday':0
	};

	commits.forEach(function(c){
		var jour = moment(c.commit.author.date).format( 'dddd');
		jourSemaine[jour] = jourSemaine[jour] +1;
    });

    return jourSemaine;
}