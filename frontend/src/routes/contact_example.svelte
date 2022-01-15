<script>

let name = "John";
let email = "john@doe.com";

const submitForm = async () => {
    const submit = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email
        })
    });

    const data = await submit.json();

    console.log(data)
}

</script>

<div class="p-5">
    <h1 class="text-xl">Api test:</h1>
    <form on:submit|preventDefault={submitForm}>
        <label>Name</label>
        <input bind:value={name} type="text" name="name" class="form-control">
        <br/>
        <label>Email</label>
        <input bind:value={email} type="text" name="email" class="form-control">
        <br/>
        <input type="submit" class="bg-blue-500 p-2 block"/>
    </form>

</div>