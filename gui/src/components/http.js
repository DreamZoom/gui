import $ from 'jquery';
export default {
	get(options) {
        if(options){
            options.method="get";
        }

        return new Promise((resolve,reject)=>{
            $.ajax({
                ...options
            }).then((response)=>{
                resolve(response);
            },(err)=>{
                reject(err);
            });
        
        });
    },
	post(options) {
        if(options){
            options.method="post";
        }
		return new Promise((resolve,reject)=>{
            $.ajax({
                ...options
            }).then((response)=>{
                resolve(response);
            },(err)=>{
                reject(err);
            });
        });
	}
};
